git status
git add [files] - добавляет файлы в stage
git commit -m "comment" - запись в stage
git log / git log --oneline
git push [rep_link] [branch_name] - отправляет изменения на удаленный репозиторий
Другие команды:

git diff - показывает какие изменения были проделаны в определенном файле
git reset [file_name] - отменяет добавленные файлы в stage
git reset --hard - отменяет вообще все изменения в проекте до начального состояния
git remote -v - показывает привязку к github
git init - инициализирует проект для git
git remote add [name] [rep_link] (rep_link берется с сайта GitHub) - привязка к репозиторию на GitHub
git branch - посмотреть какие есть ветки
git branch [branch_name] - добавить новую ветку
git checkout [branch_name] - переключиться на ветку
git pull [rep_link] [branch_name] - забирает изменения из удаленного репозитория
git branch -d [branch_name] - удалить ветку локально
git merge [branch_name] - забирает изменения из удаленного репозитория. После нужно использовать команду git push
