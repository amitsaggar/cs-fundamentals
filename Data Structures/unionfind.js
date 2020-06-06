class UnionFind {
   constructor(count) {
      this.count = count;
      this.parent = [];
      for(let i=0; i<count; i++) {
        this.parent[i] = i;
      }
   }

   union(a, b) {
      let rootA = this.find(a);
      let rootB = this.find(b);
      if (rootA === rootB) return;
      if (rootA < rootB) {
         if (this.parent[b] != b) this.union(this.parent[b], a);
         this.parent[b] = this.parent[a];
      } else {
         if (this.parent[a] != a) this.union(this.parent[a], b);
         this.parent[a] = this.parent[b];
      }
   }

   find(a) {
      while (this.parent[a] !== a) {
         this.parent[a] = this.parent[this.parent[a]];
         a = this.parent[a];
      }
      return a;
   }
   
   connected(a, b) {
      return this.find(a) === this.find(b);
   }
}

   // Returns number of islands in a[][] 
     var countIslands = function (a) 
     { 
        let n = a.length; 
        let m = a[0].length; 
  
        let dus = new UnionFind(n*m); 
        console.log(dus.parent);
        /* The following loop checks for its neighbours 
           and unites the indexes  if both are 1. */
        for (let j=0; j<n; j++) 
        { 
            for (let k=0; k<m; k++) 
            { 
                // If cell is 0, nothing to do 
                if (a[j][k] == 0) 
                    continue; 
  
                // Check all 8 neighbours and do a union 
                // with neighbour's set if neighbour is  
                // also 1 
                if (j+1 < n && a[j+1][k]==1) 
                    dus.union(j*(m)+k, (j+1)*(m)+k); 
                if (j-1 >= 0 && a[j-1][k]==1) 
                    dus.union(j*(m)+k, (j-1)*(m)+k); 
                if (k+1 < m && a[j][k+1]==1) 
                    dus.union(j*(m)+k, (j)*(m)+k+1); 
                if (k-1 >= 0 && a[j][k-1]==1) 
                    dus.union(j*(m)+k, (j)*(m)+k-1); 
                if (j+1<n && k+1<m && a[j+1][k+1]==1) 
                    dus.union(j*(m)+k, (j+1)*(m)+k+1); 
                if (j+1<n && k-1>=0 && a[j+1][k-1]==1) 
                    dus.union(j*m+k, (j+1)*(m)+k-1); 
                if (j-1>=0 && k+1<m && a[j-1][k+1]==1) 
                    dus.union(j*m+k, (j-1)*m+k+1); 
                if (j-1>=0 && k-1>=0 && a[j-1][k-1]==1) 
                    dus.union(j*m+k, (j-1)*m+k-1);
            } 
        } 
  
        // Array to note down frequency of each set 
        let c = new Array(n*m).fill(0);
        let numberOfIslands = 0; 
        for (let j=0; j<n; j++) 
        { 
            for (let k=0; k<m; k++) 
            { 
                if (a[j][k]==1) 
                { 
                    let x = dus.find(j*m+k);
                    // If frequency of set is 0,  
                    // increment numberOfIslands 
                    if (c[x]==0) { 
                        numberOfIslands++; 
                        c[x]++; 
                    } 
                    else {
                        c[x]++; 
                    }
                } 
            } 
        } 
        return numberOfIslands; 
    }

let a = [[1, 1, 0, 0, 0], 
         [0, 1, 0, 0, 1], 
         [1, 0, 0, 1, 1], 
         [0, 0, 0, 0, 0], 
         [1, 0, 1, 0, 1]];
console.log("number of islands "+ countIslands(a));
