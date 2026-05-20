db.customers.insertMany([
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a01"),
    "name": "Alice Anderson",
    "address": {
      "street": "Carrer Major",
      "number": "1",
      "floor": "1",
      "door": "A",
      "city": "Barcelona",
      "zip_code": "08001",
      "country": "Spain"
    },
    "phone": "600111001",
    "email": "alice@corp.com",
    "registration_date": ISODate("2023-01-01T00:00:00Z"),
    "recommended_by_customer_id": null,
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000001"),
        "sale_date": ISODate("2023-01-10T10:00:00Z"),
        "employee_name": "Sarah Connor",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Acetate",
          "frame_color": "Black",
          "price": 145.00,
          "lenses": {
            "left": {
              "graduation": 1.25,
              "color": "Green"
            },
            "right": {
              "graduation": 1.50,
              "color": "Green"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000002"),
        "sale_date": ISODate("2023-01-10T10:00:00Z"),
        "employee_name": "Sarah Connor",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Metallic",
          "frame_color": "Gold",
          "price": 160.00,
          "lenses": {
            "left": {
              "graduation": 0.00,
              "color": "Brown"
            },
            "right": {
              "graduation": 0.00,
              "color": "Brown"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000003"),
        "sale_date": ISODate("2023-01-10T10:00:00Z"),
        "employee_name": "Sarah Connor",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Frameless",
          "frame_color": "Grey",
          "price": 210.00,
          "lenses": {
            "left": {
              "graduation": 0.50,
              "color": "Clear"
            },
            "right": {
              "graduation": 0.75,
              "color": "Clear"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000004"),
        "sale_date": ISODate("2023-09-15T11:30:00Z"),
        "employee_name": "James Wilson",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Acetate",
          "frame_color": "Matte Black",
          "price": 195.00,
          "lenses": {
            "left": {
              "graduation": 2.00,
              "color": "Blue Prizm"
            },
            "right": {
              "graduation": 2.00,
              "color": "Blue Prizm"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000005"),
        "sale_date": ISODate("2023-09-15T11:30:00Z"),
        "employee_name": "James Wilson",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Metallic",
          "frame_color": "Silver",
          "price": 185.00,
          "lenses": {
            "left": {
              "graduation": 1.00,
              "color": "Black"
            },
            "right": {
              "graduation": 1.00,
              "color": "Black"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000006"),
        "sale_date": ISODate("2023-12-20T16:45:00Z"),
        "employee_name": "Sarah Connor",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Acetate",
          "frame_color": "Black",
          "price": 145.00,
          "lenses": {
            "left": {
              "graduation": 1.25,
              "color": "Green"
            },
            "right": {
              "graduation": 1.50,
              "color": "Green"
            }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a02"),
    "name": "Bob Bennett",
    "address": {
      "street": "Carrer de València",
      "number": "20",
      "floor": "2",
      "door": "2a",
      "city": "Barcelona",
      "zip_code": "08002",
      "country": "Spain"
    },
    "phone": "600222002",
    "email": "bob@corp.com",
    "registration_date": ISODate("2023-04-01T00:00:00Z"),
    "recommended_by_customer_id": ObjectId("603dcc81feda2e32a4e21a01"),
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000007"),
        "sale_date": ISODate("2023-02-05T09:15:00Z"),
        "employee_name": "Thomas Anderson",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Metallic",
          "frame_color": "Gold",
          "price": 160.00,
          "lenses": {
            "left": {
              "graduation": 0.00,
              "color": "Brown"
            },
            "right": {
              "graduation": 0.00,
              "color": "Brown"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000008"),
        "sale_date": ISODate("2023-10-10T14:20:00Z"),
        "employee_name": "Elena Rodríguez",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Metallic",
          "frame_color": "Silver",
          "price": 185.00,
          "lenses": {
            "left": {
              "graduation": 1.00,
              "color": "Black"
            },
            "right": {
              "graduation": 1.00,
              "color": "Black"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000009"),
        "sale_date": ISODate("2023-10-10T14:20:00Z"),
        "employee_name": "Elena Rodríguez",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Frameless",
          "frame_color": "Grey",
          "price": 210.00,
          "lenses": {
            "left": {
              "graduation": 0.50,
              "color": "Clear"
            },
            "right": {
              "graduation": 0.75,
              "color": "Clear"
            }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000010"),
        "sale_date": ISODate("2023-11-12T10:00:00Z"),
        "employee_name": "Thomas Anderson",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Acetate",
          "frame_color": "Black",
          "price": 145.00,
          "lenses": {
            "left": {
              "graduation": 1.25,
              "color": "Green"
            },
            "right": {
              "graduation": 1.50,
              "color": "Green"
            }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a03"),
    "name": "Charlie Clark",
    "address": {
      "street": "Carrer d'Aragó",
      "number": "300",
      "floor": "4",
      "door": "1b",
      "city": "Barcelona",
      "zip_code": "08003",
      "country": "Spain"
    },
    "phone": "600333003",
    "email": "charlie@corp.com",
    "registration_date": ISODate("2023-05-01T00:00:00Z"),
    "recommended_by_customer_id": ObjectId("603dcc81feda2e32a4e21a02"),
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000011"),
        "sale_date": ISODate("2023-04-01T10:00:00Z"),
        "employee_name": "Linda Hamilton",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Metallic",
          "frame_color": "Silver",
          "price": 185.00,
          "lenses": {
            "left": {
              "graduation": 1.00,
              "color": "Black"
            },
            "right": {
              "graduation": 1.00,
              "color": "Black"
            }
          }
        }
      }
    ]
  }
]);
db.customers.insertMany([
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a04"),
    "name": "David Dawson",
    "address": {
      "street": "Calle Mayor",
      "number": "14",
      "floor": "1",
      "door": "B",
      "city": "Madrid",
      "zip_code": "28001",
      "country": "Spain"
    },
    "phone": "600444004",
    "email": "david@logic.net",
    "registration_date": ISODate("2023-01-10T00:00:00Z"),
    "recommended_by_customer_id": null,
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000012"),
        "sale_date": ISODate("2023-03-20T12:00:00Z"),
        "employee_name": "James Wilson",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Metallic",
          "frame_color": "Gold",
          "price": 160.00,
          "lenses": {
            "left": { "graduation": 0.00, "color": "Brown" },
            "right": { "graduation": 0.00, "color": "Brown" }
          }
        }
      },
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000013"),
        "sale_date": ISODate("2023-11-25T17:30:00Z"),
        "employee_name": "David Chen",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Acetate",
          "frame_color": "Matte Black",
          "price": 195.00,
          "lenses": {
            "left": { "graduation": 2.00, "color": "Blue Prizm" },
            "right": { "graduation": 2.00, "color": "Blue Prizm" }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a05"),
    "name": "Elena Evans",
    "address": {
      "street": "Calle Gran Vía",
      "number": "55",
      "floor": "3",
      "door": "A",
      "city": "Madrid",
      "zip_code": "28002",
      "country": "Spain"
    },
    "phone": "600555005",
    "email": "elena@logic.net",
    "registration_date": ISODate("2023-04-10T00:00:00Z"),
    "recommended_by_customer_id": ObjectId("603dcc81feda2e32a4e21a04"),
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000014"),
        "sale_date": ISODate("2023-05-15T11:00:00Z"),
        "employee_name": "Thomas Anderson",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Frameless",
          "frame_color": "Grey",
          "price": 210.00,
          "lenses": {
            "left": { "graduation": 0.50, "color": "Clear" },
            "right": { "graduation": 0.75, "color": "Clear" }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a06"),
    "name": "Frank Foster",
    "address": {
      "street": "Carrer de Marina",
      "number": "88",
      "floor": "Bajos",
      "door": null,
      "city": "Barcelona",
      "zip_code": "08005",
      "country": "Spain"
    },
    "phone": "600666006",
    "email": "frank@corp.com",
    "registration_date": ISODate("2023-04-05T00:00:00Z"),
    "recommended_by_customer_id": ObjectId("603dcc81feda2e32a4e21a01"),
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000015"),
        "sale_date": ISODate("2023-06-20T12:00:00Z"),
        "employee_name": "Sarah Connor",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Acetate",
          "frame_color": "Black",
          "price": 145.00,
          "lenses": {
            "left": { "graduation": 1.25, "color": "Green" },
            "right": { "graduation": 1.50, "color": "Green" }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a07"),
    "name": "Grace Gomez",
    "address": {
      "street": "Calle Sierpes",
      "number": "4",
      "floor": "Principal",
      "door": null,
      "city": "Sevilla",
      "zip_code": "41001",
      "country": "Spain"
    },
    "phone": "600777007",
    "email": "grace@web.org",
    "registration_date": ISODate("2023-02-01T00:00:00Z"),
    "recommended_by_customer_id": null,
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000016"),
        "sale_date": ISODate("2023-07-25T13:00:00Z"),
        "employee_name": "James Wilson",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Metallic",
          "frame_color": "Gold",
          "price": 160.00,
          "lenses": {
            "left": { "graduation": 0.00, "color": "Brown" },
            "right": { "graduation": 0.00, "color": "Brown" }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a08"),
    "name": "Henry Harris",
    "address": {
      "street": "Calle Betis",
      "number": "21",
      "floor": "2",
      "door": "C",
      "city": "Sevilla",
      "zip_code": "41002",
      "country": "Spain"
    },
    "phone": "600888008",
    "email": "henry@web.org",
    "registration_date": ISODate("2023-02-15T00:00:00Z"),
    "recommended_by_customer_id": null,
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000017"),
        "sale_date": ISODate("2023-08-30T14:00:00Z"),
        "employee_name": "Elena Rodríguez",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Acetate",
          "frame_color": "Matte Black",
          "price": 195.00,
          "lenses": {
            "left": { "graduation": 2.00, "color": "Blue Prizm" },
            "right": { "graduation": 2.00, "color": "Blue Prizm" }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a09"),
    "name": "Isabel Irving",
    "address": {
      "street": "Paseo Independencia",
      "number": "12",
      "floor": "5",
      "door": "A",
      "city": "Zaragoza",
      "zip_code": "50001",
      "country": "Spain"
    },
    "phone": "600999009",
    "email": "isabel@web.org",
    "registration_date": ISODate("2023-03-01T00:00:00Z"),
    "recommended_by_customer_id": null,
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000018"),
        "sale_date": ISODate("2023-10-05T15:00:00Z"),
        "employee_name": "David Chen",
        "glasses": {
          "brand": "Oakley",
          "frame_type": "Metallic",
          "frame_color": "Silver",
          "price": 185.00,
          "lenses": {
            "left": { "graduation": 1.00, "color": "Black" },
            "right": { "graduation": 1.00, "color": "Black" }
          }
        }
      }
    ]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21a10"),
    "name": "Jack Jackson",
    "address": {
      "street": "Calle Alfonso I",
      "number": "3",
      "floor": "4",
      "door": "2",
      "city": "Zaragoza",
      "zip_code": "50002",
      "country": "Spain"
    },
    "phone": "600101010",
    "email": "jack@web.org",
    "registration_date": ISODate("2023-03-10T00:00:00Z"),
    "recommended_by_customer_id": null,
    "sales_history": [
      {
        "sale_id": ObjectId("65f5a123e4b0c25a00000019"),
        "sale_date": ISODate("2023-12-15T16:00:00Z"),
        "employee_name": "Linda Hamilton",
        "glasses": {
          "brand": "Ray-Ban",
          "frame_type": "Frameless",
          "frame_color": "Grey",
          "price": 210.00,
          "lenses": {
            "left": { "graduation": 0.50, "color": "Clear" },
            "right": { "graduation": 0.75, "color": "Clear" }
          }
        }
      }
    ]
  }
]);

db.suppliers.insertMany([
  {
    "_id": ObjectId("603dcc81feda2e32a4e21b01"),
    "name": "Luxottica Group",
    "address": {
      "street": "Via Cantù",
      "number": "2",
      "floor": "1",
      "door": "A",
      "city": "Milan",
      "zip_code": "20123",
      "country": "IT"
    },
    "phone": "932112233",
    "fax": "932112234",
    "nif": "A12345678",
    "brands_supplied": ["Ray-Ban", "Oakley"]
  },
  {
    "_id": ObjectId("603dcc81feda2e32a4e21b02"),
    "name": "Safilo Group",
    "address": {
      "street": "Settima Strada",
      "number": "15",
      "floor": "PB",
      "door": "1",
      "city": "Padua",
      "zip_code": "35129",
      "country": "IT"
    },
    "phone": "915556677",
    "fax": "915556678",
    "nif": "B87654321",
    "brands_supplied": ["Carrera"]
  }
]);
