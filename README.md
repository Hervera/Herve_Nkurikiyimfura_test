## Question A: Overlapping Line Segments  (do-lines-overlap directory)

**Description**
The goal for this question is to write a program that accepts two line segments on the x-axis, represented as pairs of coordinates (x1, x2) and (x3, x4), and determines whether they overlap. 

### Example
- For input (1,5) and (2,6), the program should return that these two line segments overlap.
- For input (1,5) and (6,8), the program should return that these two line segments do not overlap.

---

## Question B: Version String Comparison (compare-version-strings directory)

**Description**
The goal of this question is to write a software library that accepts two version strings as input and determines whether one version is greater than, equal to, or less than the other. 

### Example
- For input "1.2" and "1.1", the library should return that "1.2" is greater than "1.1".

---

## Question C: Geo Distributed LRU Cache with Time Expiration (lru-cache directory)

**Description**
The goal is to write a new library that can be integrated into the Ormuco stack. This library should implement a Geo Distributed Least Recently Used (LRU) cache with time expiration. It is designed to meet several key criteria:

1. Simplicity: Integration should be straightforward.
2. Resilience: The cache must be resilient to network failures or crashes.
3. Near Real-Time Replication: Data should be replicated in near real-time across geolocations, with real-time writes.
4. Data Consistency: Data must be consistent across different regions.
5. Locality of Reference: Data should be available from the closest region.
6. Flexible Schema: The library should support flexible data schemas.
7. Cache Expiry: The cache should support data expiration.

---

**Note:** This is a high-level description. Detailed documentation is provided separately for each directory.
