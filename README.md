# carpool-buddy

## Api

### User Routes

POST /api/signup

GET /api/signin

### Trip Routes

GET /api/trip/:userid
  takes a user id and returns an array of trip objects that the user is 
  a part of on req.body.trips

```
req {
  body {
    trips {
      [{_id: 0, dest: there}, {_id: 1, dest: here}, {_id: 2, dest: elsewere}]
    }
  }
}
```

POST /api/trip/:stringifiedJSON
  creates a trip entry in the database. Needs a stringified JSON object
  with the trip origin, originTime, dest, destTime, weekDays, map, and userId
  it should look like:

```
{"origin":"map coordinates", "originTime":"08:00 AM", "dest":"map coordinates",
 "weekDays":"mon, tue, thu, sat", "userId":"9H83TY3H12"}
```

DELETE /api/trip/:tripId
  takes a trip id and deletes that trip object from the database