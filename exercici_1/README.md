# alan_optics_ex1

This repository contains the design of the MongoDB data structure for the "Cul d'Ampolla" optical store automation system taking into account the customer's point of view.

---

## Interface Optimization & Data Modeling Philosophy

### Single-Query Reads
When a customer logs into their account portal, our schema allows MongoDB to fetch their complete profile, address, and entire order purchase history in a single, lightning-fast database read operation. This architecture ensures high-performance retrieval without using costly aggregation `$lookup` stages or executing multiple round-trips to the server.

### Flawless Array Embedding
Embedding `sales_history` as an array of objects handles the 1-to-Many relationship (one customer can make many purchases over time) naturally within a document database structure. Each historical purchase remains anchored to the consumer record to which it belongs.

### Maintenance of Basic Entities
Keeping `suppliers` as a separate and independent collection is correct because supplier data does not change based on individual customer actions. The relational link between a pair of glasses and its manufacturer is never lost because the business rule imposes a strict restriction where a brand is unique to exactly one supplier (enabling the optician to buy the glasses at an optimal price). Furthermore, maintaining a standalone collection ensures that if a supplier updates their contact details or tax information, the modification only needs to be made in a single document in one place, instantly reflecting across the entire database. By structuring the data this way, massive data duplication is completely avoided across the system.

This architecture and its relational lookup mechanics are demonstrated by the following files inside this directory:
1. **`alan_optics_ex1_diagram.png`**: The master abstract entity collection layout proving the independent existence of the supplier metadata alongside the customer nested array paths.
2. **`david-dawson-before-aggregate.png`**: A snapshot proving the initial state of the unified customer object keeping its multiple historical purchase transactions bundled natively inside the `sales_history` array list.
3. **`david-dawson-lookup-rayban-result.png`**: A visual snapshot demonstrating how the first unwound transaction's `brand` string field maps dynamically back to the parent supplier block via an aggregate query without requiring data duplication inside the customer collection.
4. **`david-dawson-lookup-oakley-result.png`**: A companion unwound transaction snapshot reinforcing how separate individual product elements resolve cleanly back to their designated source supplier document.

To demonstrate this data aggregation and verify the relational link dynamically, execute the following pipeline in the MongoDB shell (mongosh):
```javascript
db.customers.aggregate([
  { 
    $match: { "name": "David Dawson" } 
  },
  { 
    $unwind: "$sales_history" 
  },
  {
    $lookup: {
      from: "suppliers",
      localField: "sales_history.glasses.brand",
      foreignField: "brands_supplied",
      as: "sales_history.glasses.supplier_info"
    }
  }
]);
```