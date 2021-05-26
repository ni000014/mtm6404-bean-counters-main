//row
//create table row for each counter 
function rows (counters){
    return  counters.map(counter => `
    <tr>
        <th scope="row">${counter.index}</th>
        <td>${counter.name}</td>
        <td>${counter.bean}</td>
        <td>${counter.count}</td>
    </tr>`).join('')
}

// search 
// filter counters based on query 
// if name or bean matches 
// should be case-insensitive
function search (counters,query){
    const q = query.toLowerCase()
    return counters.filter(counter => counter.name.toLowerCase().includes(q) || counter.bean.toLowerCase().includes(q))
} 


// total
// return the total count currently displayed counter 
function total (counters){
    return counters.reduce((total,counter) => (total += counter.count),0)
}


// order 
// sort the counters based on passed property 
function order (counters, property){
    return counters.sort((a,b)=>{
        if (a[property] < b[property]){
            return -1
        } else if (a[property] > b[property]){
            return 1
        }else{
            return 0
        }
    })
}