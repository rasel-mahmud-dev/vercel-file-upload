## vercel file upload on temp directory



**tools are used**

- expressjs
- typescript
- formidable

```js
POST Request ==> https://vercel-file-streaming-git-master-raselmr.vercel.app/upload
use form data and choose files
// response like this
{
    "files": {
        "": {
            "size": 16795,
            "filepath": "/tmp/ff56aa303fb8ad65ff3334e01",
            "newFilename": "ff56aa303fb8ad65ff3334e01",
            "mimetype": "image/png",
            "mtime": "2022-08-09T14:29:26.216Z",
            "originalFilename": "2021-08-22_052933.png"
        }
    }
}

```