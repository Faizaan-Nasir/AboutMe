localStorage.visited = 0
function about_me() {
    document.getElementById("icon").href = "./src/about_me.png"
    document.getElementById("title").innerHTML = "About Me"
    return false
}

function home_page() {
    document.getElementById("icon").href = "./src/home_page.png"
    document.getElementById("title").innerHTML = "Home"
    return false
}

function blog() {
    document.getElementById("icon").href = "./src/blog.png"
    document.getElementById("title").innerHTML = "Weblog"
    return false
}

function projects() {
    document.getElementById("icon").href = "./src/projects.png"
    document.getElementById("title").innerHTML = "Projects"
    return false
}