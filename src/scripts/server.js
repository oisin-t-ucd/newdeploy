import { Server, Model } from "miragejs";
import jsonData from "../data/posts.json";

export async function makeServer() {

    let server = new Server({
        environment: "development",
        models: { post: Model },
        seeds(server) {
            server.db.loadData({ posts: jsonData });
        },
        routes() {
            this.namespace = 'api'; // remember to include this when making requests, for example the URL will be '/api/posts/'
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