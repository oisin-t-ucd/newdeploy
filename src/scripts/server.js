import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
    let res = fetch('/newdeploy/posts.json').then(res => res.json())
        .then(initialPosts => {

            let server = new Server({
                environment,
                models: { post: Model },
                seeds(server) {
                    server.db.loadData({ posts: initialPosts });
                },
                routes() {
                    this.namespace = 'api';
                    this.get('/posts');
                    this.get('/posts/:id');
                    this.post('/posts');
                    this.put('/posts/:id');
                    this.patch('/posts/:id');
                    this.del('/posts/:id');
                }
            })
            console.log(server)
            return server
        });
    return res

}