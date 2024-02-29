// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function(temperatures) {
//     let stack = [];
//     let ansArr = Array(temperatures.length).fill(null);
//     for(let i=temperatures.length-1;i>=0;i--) {
//         let c = temperatures[i]
//         let ans = 0
//         if(stack.length == 0) {
//             stack.unshift(c)
//             ansArr[i] = ans
//             // console.log("if : ", stack)
//         } else {
//             let stc = stack[0];
//             if((c < stc)) {
//                 stack.unshift(c)
//                 ans = ans+1
//                 ansArr[i] = ans
//             } else {
//                 ans = 0
//                 console.log("pre : ", c, stack, ansArr)
//                 stack.shift()
//                 ans = ans+1;
//                 ans = callFunc(stack, ans, c)
//                 ansArr[i] = ans
//                 console.log(stack, ans, ansArr)
//             }
//         }
//     }
//     console.log(ansArr)
// };
// var callFunc = function(stack , ans, temp) {
//     // console.log("post : ", stack)
//     c = temp
//     if(stack.length == 0) {
//         stack.unshift(c)
//         return 0
//     } else {
//         let stc = stack[0];
//         if((c < stc)) {
//             ans = ans+1
//             stack.unshift(c)
//             return ans
//         } else {
//             ans = ans+1
//             stack.shift()
//             return callFunc(stack, ans, c)+1
//             // return ans
//         }
//     }
//     // return ans
// };

// temperatures = [73,74,75,71,69,72,76,73]
// // dailyTemperatures(temperatures)








// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// /**
//  * @param {number[][]} isConnected
//  * @return {number}
//  */
// var findCircleNum = function(isConnected) {
//     let adj = {};
    
//     for(let i=0;i<isConnected.length;i++) {
//         adj[i] = []
//     }
//     for ( let i = 0 ; i < isConnected.length ; i++ ) {
//         for ( let j = 0 ; j < isConnected[0].length ; j++ ) {
//             if ( i == j ) {
//                 isConnected[i][j] = 0
//             }
//         }
//     }
//     for ( let i = 0 ; i < isConnected.length ; i++ ) {
//         for ( let j = 0 ; j < isConnected[0].length ; j++ ) {
//             if ( i != j && isConnected[i][j] != 0) {
//                 adj[i].push(j)
//             }
//         }
//     }

//     let vis = new Array(isConnected.length).fill(0);
//     console.log(adj, vis)
//     let res = 0;
//     let q = [];
//     for(let i=0;i<vis.length;i++) {
//         q.unshift(i);
//         if(vis[i] == 0) {
//             console.log(i)
//             while(q.length) {
//                 let popped = q.shift();
//                 vis[popped] = 1
//                 let adjEle = adj[popped]
//                 for (let index = 0; index < adjEle.length; index++) {
//                     vis[adjEle[index]] = 1
//                     q.unshift(adjEle[index])
//                 }
//                 res++;
//             }
//         }
//     }
//     console.log(res, vis)
// };

// let isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// // isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// findCircleNum(isConnected)















// function numProvinces(isConnected) {
//     const n = isConnected.length;
//     const visited = new Array(n).fill(false);
//     let provinces = 0;

//     function bfs(node) {
//         const queue = [node];
//         while (queue.length) {
//             const curr = queue.shift();
//             visited[curr] = true;
//             for (let neighbor = 0; neighbor < n; neighbor++) {
//                 if (isConnected[curr][neighbor] === 1 && !visited[neighbor]) {
//                     queue.push(neighbor);
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//             bfs(i);
//             provinces++;
//         }
//     }

//     return provinces;
// }

// // Example usage:
// const isConnected1 = [
//     [1,0,0],
//     [0,1,0],
//     [0,0,1]
// ];

// console.log(numProvinces(isConnected1)); // Output: 2



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let adj = [];
    let n = isConnected.length;
    for ( let i = 0 ; i < n ; i++ ) {
        let iner = [];
        for ( let j = 0 ; j < n ; j++ ) {
            if(isConnected[i][j] === 1 && i != j) {
                iner.push(j);
            }
        }
        adj.push(iner)
    }
    console.log(adj)
    let ans = 0
    let vis = new Array(n).fill(0);
    var dfs = (node) => {
        vis[node] = 1;
        let neigh = adj[node];
        for(let i=0;i<neigh.length;i++) {
            if(!vis[neigh[i]]) {
                dfs(neigh[i])
            }
        }
    }
    for (let index = 0; index < vis.length; index++) {
        const element = vis[index];
        if(!element) {
            dfs(index)
            ans++
        }
    }
    return ans
};
let isConnected = [[1,0,0],[0,1,0],[0,0,1]]
console.log(findCircleNum(isConnected))

















