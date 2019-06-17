import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostTodo } from './post.dto';

@Controller('posts')  // 控制器的装饰
export class PostsController {
    @Get()  // Get括号中写上'post'，而控制器不写时效果一样
    index(@Req() request, @Query() params, @Headers() headers) {  // 第一个参数就是请求的数据
        // tslint:disable-next-line:no-console
        console.log( request.body);
        // tslint:disable-next-line:no-console
        console.log( request.url );
        // tslint:disable-next-line:no-console
        console.log( headers ); // 例如一些自定义头就可以获取得到了
        return {
            title: 'skdjfkldj',
            contentArr: [1, 2, '4'],
        };
    }

    @Get(':code')
    ShadowRoot(@Param() param) {
        return {
            title: `Post ${param.code}`,
        };
    }

    @Post()
    store(@Body() body: CreatePostTodo ) {
        return {
            res: (body.number + 100),
            title: (body.title + '了不起'),
        };
    }
}
