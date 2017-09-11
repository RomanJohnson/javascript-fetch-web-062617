const app = "I don't do much.";




const token = '98ddf533c2cc3e01fd7eaa6258a844a93b282d64'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
