import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import edge from 'edge.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewsPath = join(__dirname, '..', 'views');
  const edgeEngine = edge.mount('default', viewsPath);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(viewsPath);
  app.engine(
    'edge',
    async (
      filepath: string,
      options: any,
      callback: (err: Error | null, html?: string) => void,
    ) => {
      try {
        const html = await edgeEngine.render(filepath, options);
        callback(null, html);
      } catch (err) {
        callback(err);
      }
    },
  );
  app.setViewEngine('edge');

  await app.listen(3000);
}
bootstrap();
