import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

import progressEstimator from 'progress-estimator';
import youtubedl from 'youtube-dl-exec';
import inquirer from 'inquirer';

const logger = progressEstimator();

const downloader = async (url: string, downloadType: string) => {
  let downloadError = 'Erro ao baixar o vídeo:';

  try {
    const outputDir = join(homedir(), 'videodl');

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
        format: downloadType === 'audio' ? 'bestaudio' : 'bestvideo+bestaudio',
        mergeOutputFormat: 'mp4',
        output: join(outputDir, downloadType === 'audio' ? '%(title)s.mp3' : '%(title)s.%(ext)s'),
        postprocessorArgs: downloadType === 'audio' ? '-acodec libmp3lame' : '-movflags faststart'
      };

      let downloadingMessage = `Baixando o ${downloadType === 'audio' ? 'áudio' : 'vídeo'} de ${url}\n`;
      let downloadSuccess = `${downloadType === 'audio' ? 'Áudio' : 'Vídeo'} baixado com sucesso!`;

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

const askForUrl = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Por favor, forneça a URL do vídeo ou playlist:'
    }
  ]);

  return answers.url;
};

const askDownloadType = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'downloadType',
      message: 'Você quer baixar o vídeo ou só o áudio?',
      choices: ['Vídeo', 'Áudio'],
    },
  ]);

  return answers.downloadType.toLowerCase() === 'áudio' ? 'audio' : 'video';
};

const main = async () => {
  const downloadType = await askDownloadType();
  const url = await askForUrl();
  await downloader(url, downloadType);
};

main();
