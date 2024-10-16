import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

import progressEstimator from 'progress-estimator';
import youtubedl from 'youtube-dl-exec';

const logger = progressEstimator();

const downloader = async (url: string) => {
  let downloadError = 'Erro ao baixar o vídeo:';

  try {
    const outputDir = join(process.cwd(), 'videos');

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir);
    }

    const metadataPromise = youtubedl(url, {
      skipDownload: true,
      flatPlaylist: true,
      dumpSingleJson: true
    });
    
    const metadata = await logger(metadataPromise, `Obtendo metadata de ${url}\n`);
    
    if (typeof metadata !== 'string') {
      let options = {
        format: 'bestvideo+bestaudio',
        mergeOutputFormat: 'mp4',
        output: join(outputDir, '%(title)s.%(ext)s'),
        postprocessorArgs: '-movflags faststart'
      };

      let downloadingMessage = `Baixando o vídeo de ${url}\n`;
      let downloadSuccess = 'Vídeo baixado com sucesso!';

      if (metadata._type === 'playlist') {
        options = {
          ...options,
          output: join(outputDir, '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s')
        };

        downloadingMessage = `Baixando a playlist de ${url}\n`;
        downloadSuccess = 'Playlist baixada com sucesso!';
        downloadError = 'Erro ao baixar a playlist:';
      }

      const promise = youtubedl(url, options);
  
      await logger(promise, downloadingMessage);
      
      console.log(downloadSuccess);

      return;
    }

    console.log(`Erro ao obter metadata ${url}`);
    
  } catch (error) {
    console.log(downloadError, error);
  }
};

downloader('https://www.youtube.com/watch?v=XelFRD8LhsM');
