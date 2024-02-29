
// console.log("Welcome to BFS!");
// /**
//  * @param {number[][]} isConnected
//  * @return {number}
//  */
// var bfsComp = function(isConnected) {
//     let adj = [];
//     for ( let i = 0; i < isConnected.length; i++ ) {
//         let innerAdj = [];
//         for ( let j = 0; j < isConnected.length; j++ ) {
//             if ( isConnected[i][j] === 1 && i != j ) {
//                 innerAdj.push(j);
//             }
//         }
//         adj.push(innerAdj);
//     }
//     console.log(adj);
//     let ans = 0;
//     let vis = new Array(isConnected.length).fill(0);
//     let q = [];
//     q.push(0);

//     while ( q.length ) {
//         let popped = q.shift();
//         let neigh = adj[popped];
//         vis[popped] = 1;

//         // for (let index = 0; index < neigh.length; index++) {
//         //     if( !vis[neigh[index]]) {
//         //         q.push(neigh[index]);
//         //         vis[neigh[index]] = 1;
//         //         ans++;
//         //     }
//         // }
//         for (let neighbor of neigh) {
//             if (!vis[neighbor]) {
//                 q.push(neighbor);
//                 vis[neighbor] = 1; // Mark the neighbor as visited
//                 ans++;
//             }
//         }
//     }
//     return ans;
// };
// let isConnected = [[1,1,0],[1,1,0],[0,0,1]];
// // isConnected = [[1,0,0],[0,1,0],[0,0,1]];
// console.log(bfsComp(isConnected))

console.log("Welcome to BFS!");

var bfsComp = function(isConnected) {
    let adj = [];
    for (let i = 0; i < isConnected.length; i++) {
        let innerAdj = [];
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && i !== j) { // Corrected condition
                innerAdj.push(j);
            }
        }
        adj.push(innerAdj);
    }
    console.log(adj);
    let ans = 0;
    let vis = new Array(isConnected.length).fill(0);
    let q = [];

    function bfs(node) {
        q.push(node);
        while (q.length) {
            let popped = q.shift();
            let neigh = adj[popped];
            vis[popped] = 1;
    
            // Accessing neighbor indices directly from the neigh array
            for (let neighbor of neigh) {
                if (!vis[neighbor]) {
                    q.push(neighbor);
                    vis[neighbor] = 1; // Mark the neighbor as visited
                    // ans++;
                }
            }
        }
    }
    for (let index = 0; index < vis.length; index++) {
        if (!vis[index]) {
            bfs(index)
            ans++
        }
        
    }
    return ans;
};

let isConnected = [[1,1,0],[1,1,0],[0,0,1]];
isConnected = [[1,0,0],[0,1,0],[0,0,1]];
console.log(bfsComp(isConnected));
