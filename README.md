# videodl

![](https://img.shields.io/github/stars/titenq/quizmania.svg)&nbsp;&nbsp;
![](https://img.shields.io/github/forks/titenq/quizmania.svg)&nbsp;&nbsp;
![](https://img.shields.io/github/issues/titenq/quizmania.svg) 

### Executa o download de vídeos:
- YouTube - Vídeo
- YouTube - Shorts
- YouTube - Playlist
- Instagram
- Facebook

## Pré-requisitos

### NodeJS >= 22

### Python >= 3.7

### FFmpeg

#### Instalar FFmpeg

#### Linux (Debian Based):
```bash
sudo apt install ffmpeg
```

#### macOS:
```bash
brew install ffmpeg
```

#### Windows:
Siga este wikihow: [https://www.wikihow.com/Install-FFmpeg-on-Windows](https://www.wikihow.com/Install-FFmpeg-on-Windows)

## Instalação

**Clone o Repositório:**
```bash
git clone git@github.com:titenq/videodl.git
```

**Navegue até o diretório do projeto:**
```bash
cd videodl
```

**Instale as Dependências:**
```bash
npm install
```

**Execute o build:**
```bash
npm run build
```

**Crie o link do CLI:**
```bash
npm link
```

## Como usar
```bash
videodl https://www.youtube.com/watch?v=Ptbk2af68e8
```
Substitua `https://www.youtube.com/watch?v=Ptbk2af68e8` pela URL do vídeo ou playlist que você deseja baixar.

Os vídeos serão salvos em: `pasta-do-usuário/videodl`.

## Licença
Distribuído sob a licença GPL-3.0. Consulte `LICENSE.txt` para obter mais informações.
