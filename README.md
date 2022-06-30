# good-bye

A fun goodbye console web service made in Javascript.

Forked/inspired by blog post: https://medium.com/@atulanand94/building-web-based-uis-for-terminals-using-javascript-60b5eee31213

Created in OCI using Terraform guide https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/tf-provider/01-summary.htm

# To run locally:

1. `git clone` this repo
2. `npm install`
3. `npm start`

This should launch the server using port 3000.

After that open another terminal and do:

**Simple Example**

`curl http://localhost:3000/`

or

`wget -q -O - http://localhost:3000/`

# To run on server:
`docker build -t good-bye . && docker run -d --restart unless-stopped -p80:3000 good-bye`
