# Ejemplo-Git

Proyecto de ejemplo para aprender a usar Git: desde crear un repositorio hasta trabajar con ramas y repositorios remotos.

## Requisitos

- [Git](https://git-scm.com/downloads) instalado (`git --version` para comprobarlo)

## Configuración inicial

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
```

## Comandos básicos

| Comando | Descripción |
| --- | --- |
| `git init` | Crea un repositorio nuevo en la carpeta actual |
| `git status` | Muestra el estado de los archivos |
| `git add <archivo>` | Agrega cambios al área de preparación (staging) |
| `git add .` | Agrega todos los cambios |
| `git commit -m "mensaje"` | Guarda los cambios preparados como un commit |
| `git log --oneline` | Muestra el historial resumido |
| `git diff` | Muestra los cambios sin preparar |

## Flujo de trabajo básico

```bash
git init
git add README.md
git commit -m "Agrega README"
```

## Ramas

```bash
git branch                 # listar ramas
git switch -c mi-rama      # crear y cambiar a una rama nueva
git switch main            # volver a main
git merge mi-rama          # fusionar mi-rama en la rama actual
git branch -d mi-rama      # eliminar la rama ya fusionada
```

## Repositorios remotos

```bash
git remote add origin <url-del-repositorio>
git push -u origin main    # subir cambios por primera vez
git pull                   # traer cambios del remoto
git clone <url>            # copiar un repositorio existente
```

## Deshacer cambios

```bash
git restore <archivo>          # descarta cambios no preparados
git restore --staged <archivo> # saca un archivo del staging
git revert <commit>            # crea un commit que deshace otro
```

## Buenas prácticas

- Haz commits pequeños y frecuentes.
- Escribe mensajes claros que expliquen el *qué* y el *por qué*.
- Usa ramas para nuevas funcionalidades o correcciones.
- Revisa `git status` y `git diff` antes de hacer commit.

## Licencia

Proyecto con fines educativos.
