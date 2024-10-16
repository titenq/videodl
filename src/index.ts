import progressEstimator from 'progress-estimator';
import youtubedl from 'youtube-dl-exec';

const logger = progressEstimator();

const downloader = async (url: string) => {
  try {
    const metadataPromise = youtubedl(url, { dumpSingleJson: true });
    const metadata = await logger(metadataPromise, `Obtendo metadata do vídeo ${url}\n`);
    
    if (typeof metadata !== 'string') {
      const videoTitle = metadata.title.replace(/[<>:"/\\|?*]+/g, '');

      const options = {
        format: 'bestvideo+bestaudio',
        mergeOutputFormat: 'mp4',
        output: `./videos/${videoTitle}.mp4`,
        postprocessorArgs: '-movflags faststart'
      };

      const promise = youtubedl(url, options);
  
      await logger(promise, `Baixando o vídeo de ${url}\n`);
      
      console.log('Vídeo baixado com sucesso!');

      return;
    }

    console.log(`Erro ao obter metadata do vídeo ${url}`);
    
  } catch (error) {
    console.log('Erro ao baixar o vídeo:', error);
  }
};

downloader('https://www.youtube.com/watch?v=XelFRD8LhsM');
