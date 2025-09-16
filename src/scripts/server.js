import { Server, Model } from "miragejs";

export async function makeServer(initialData = {}) {

    // let res = await fetch('/newdeploy/posts.json') // here 'newdeploy' should be replaced with the name of your GitHub repository which is also the astro 'base' in astro.config.mjs
    // let data = await res.json()
    console.log(initialData)
    let server = new Server({
        environment: "development",
        models: { post: Model },
        seeds(server) {
            server.db.loadData({ posts: initialData });
        },
        routes() {
            this.namespace = 'api'; // remember to include this when making requests
            this.get('/posts');
            this.get('/posts/:id');
            this.post('/posts');
            this.put('/posts/:id');
            this.patch('/posts/:id');
            this.del('/posts/:id');
        }
    })
    return server
}