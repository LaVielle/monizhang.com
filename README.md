# Docs

### Write a post
Posts are formatted with Mardown.
This means you need to use special markdown syntax to create highlights in your document, for example headers, bold text, links, etc. You can find syntax documentation [here](https://www.markdownguide.org/basic-syntax/).

To make the writing experience more pleasant, make sure to use a mardown editor (such as [StackEdit](https://stackedit.io/app#)) that shows your formatting as you type.

Once you've written your post, you're ready to add it to your site!

*Note: If you need to add more complex elements to your post, such as images or videos, as Sam!*

### Add a post
The easiest way to add a new file to the project is by using the GitHub interface. The following link creates a new file in `src/assets/posts`, which is the directory in which all posts live:

[https://github.com/LaVielle/monizhang.com/new/master/src/assets/posts](https://github.com/LaVielle/monizhang.com/new/master/src/assets/posts)

Give the file a meaningful name and the `.mdx` file extension (eg: `my-first-post.mdx`).

In the file, you then need to add metadata that will be used to generate the article page:
- `path`: in the format `/posts/<your-post-name>`, for example: `/posts/my-first-post`
- `date`: in the format `dd-mm-yyyy`, for example: `29-03-1994`
- `title`
- `author`
- `contentType`: should be `post`

This metadata section should look like this:
```
---
path: "/posts/hello"
date: "07-08-2020"
title: "Two"
author: "Moni"
contentType: "post"
---
``` 

*Note that the three dashes `---` at the beginning and end of this section are necessary!*

After this section you can simply paste your markdown formatted post.

Save the file and you're ready to go to the next step.

### Deploy your new post
Once you've formatted the file correctly (give it a name, fill in metadata section, add content), you're ready to deploy it!

At the bottom of the page you'll see a ` Commit new file` section.
Make sure that ` Commit directly to the master branch.` is selected and simply click the `Commit new file` button at the bottom of the page.
This will trigger a build process that you don't need to worry about and you should see the changes on your live withing a few minutes.
