gulp神器
======
把`package.json`和`gulpfile`文件放在项目根目录下，
命令行cd到当前目录，输入`npm install`，会自动下载`package.json`列表里面的插件。

自动同步刷新
------
命令行cd到当前目录，输入`gulp async`回车，自动进入到3000端口，可在文件修改保存后自动刷新浏览器，跨平台可用。

文件压缩
------
命令行cd到当前目录，输入`gulp minify`回车，会自动新建`min_js`和`min_css`目录，用于存放压缩后的js或css文件。注意，需要被压缩的js和css文件需要存放在`js`和`css`文件夹中。

文件合并
------
命令行cd到当前目录，输入`gulp pack`回车，会自动新建`pack_js`和`pack_css`目录，用于存放合并后的js或css文件。注意，需要被压缩的js和css文件需要存放在`js`和`css`文件夹中。
