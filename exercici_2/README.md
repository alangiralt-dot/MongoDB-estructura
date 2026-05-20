# alan_optics_ex2

This repository contains the design of the MongoDB data structure for the "Cul d'Ampolla" optical store automation system taking into account the glasses' point of view.

---

## Interface Optimization & Data Modeling Philosophy

### Single-Query Reads
When a store manager views a specific product or model entry, our schema allows MongoDB to fetch the complete pair of glasses, its active measurements, lens metadata, and entire transaction purchase history in a single, lightning-fast database read operation. This architecture ensures high-performance retrieval without executing multiple round-trips to the server.

### Flawless Array Embedding
Embedding `sales_history` as an array of objects handles the 1-to-Many relationship (one specific model inventory stock can be sold multiple times across various invoices) naturally within a document database structure. Each historical purchase remains anchored to the core product record to which it belongs.

### Maintenance of Basic Entities
Keeping `suppliers` as a separate and independent collection is correct because supplier data does not change based on individual product modifications. The relational link between a pair of glasses and its manufacturer is maintained cleanly via an efficient `supplier_id` reference. Furthermore, maintaining a standalone collection ensures that if a supplier updates their contact details, the modification only needs to be made in a single document in one place, instantly reflecting across the entire database. By structuring the data this way, massive data duplication is completely avoided across the system.

This architecture and its relational lookup mechanics are demonstrated by the following files inside this directory:
1. **`alan_optics_ex2_diagram.png`**: The master abstract entity collection layout proving the independent existence of the supplier metadata alongside the product nested array paths.
2. **`glasses_document_before_lookup.png`**: A snapshot proving the initial state of the unified glasses object keeping its multiple historical transaction items bundled natively inside the `sales_history` array list.
3. **`glasses_document_after_lookup.png`**: A visual snapshot demonstrating how the document resolves cleanly after flattening the matching supplier object into a direct sub-document relation via an aggregate query without requiring data duplication inside the glasses collection.

To demonstrate this data aggregation and verify the relational link dynamically, execute the following pipeline in the MongoDB shell (mongosh):
```javascript
db.glasses.aggregate([
  {
    "$match": { "_id": ObjectId("65f5a123e4b0c25a11111111")}
  },
  {
    "$lookup": {
      "from": "suppliers",
      "localField": "supplier_id",
      "foreignField": "_id",
      "as": "supplier_info"
    }
  },
  {
    "$unwind": "$supplier_info"
  }
])
```
