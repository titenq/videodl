# videodl

![](https://img.shields.io/github/stars/titenq/videodl.svg)&nbsp;&nbsp;
![](https://img.shields.io/github/forks/titenq/videodl.svg)&nbsp;&nbsp;
![](https://img.shields.io/github/issues/titenq/videodl.svg) 

### Executa o download de vídeos e agora com a opção de baixar somente o áudio:
- YouTube - Vídeo
- YouTube - Shorts
- YouTube - Playlist
- Instagram
- Facebook

## Pré-requisitos

### NodeJS >= 20.18.0

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
### Execute no terminal:
```bash
videodl
```

### Escolha entre vídeo ou áudio:
```bash
? Você quer baixar o vídeo ou só o áudio? (Use arrow keys)
❯ Vídeo
  Áudio
```

### Forneça a URL:
```bash
? Por favor, forneça a URL do vídeo ou playlist:
```

### Os arquivos serão salvos em: `pasta-do-usuário/videodl`.

## Licença
Distribuído sob a licença GPL-3.0. Consulte `LICENSE.txt` para obter mais informações.
