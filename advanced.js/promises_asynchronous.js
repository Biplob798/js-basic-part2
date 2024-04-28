// Promise

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = 'welcome next level developer'
        const error = false
        if (!error) {
            resolve(data)
        } else {
            reject('good by developer')
        }
    }, 2000)
})



fetchData.then((data) => {
    console.log(data);
}).
    catch((error) => {
        console.log(error);
    })


// asynchronous 

async function getData() {
    try {
        const data = await fetchData
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData()