import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { engine } from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
  app.engine(
    '.hbs',
    engine({
      defaultLayout: 'main',
      partialsDir: join(__dirname, '..', 'src/views/partials'),
      layoutsDir: join(__dirname, '..', '/src/views/layouts'),
      extname: '.hbs',
    }),
  );
  app.setViewEngine('hbs');
  app.setGlobalPrefix('api');

  await app.listen(3030);
}
bootstrap();
