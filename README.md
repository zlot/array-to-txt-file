# array-to-txt-file

takes in an array and will write each value to a text file.
Each value is force-converted toString(), and concatenated with a newline.
Objects are flattened and written out on newlines with the form key,value

## Install
    $ npm install array-to-txt-file

```
writeArrayToTxtFile(array, txtFilePath, cb)
```

## Unit tests

    $ npm test
