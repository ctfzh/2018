

## GIT

### ʲô��GIT
https://git-scm.com/downloads

- ��һ��Դ���������
- ��һ����Ŀ�У������ɿ�����Ա��д�Ķ�����Դ����
- Դ�����б�Ҫ����������
- ��Դ������Ա�׷�ݣ���Ҫ��¼ÿ�α����ʲô��˭������α仯
- ��Ϊ��ά���Ƚ��鷳��
- GIT��Linux֮������Ϊ��ά������Linux��Դ����д��һ������
- Git ֮ǰ �ܶ�ʹ�� svn vss tfs hs ......


- https://guides.github.com/

### ��װGIT

���û���������
	GIT_HOME : C:\PortableGit
	path: %GIT_HOME%;%GIT_HOME%\bin    ע��ǰ��Ҫ��;�ֺţ���

	
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000

- git�����й���
- ����git�����е�һ���ͻ���������ṩһ������ȥ����Դ���룩

### GIT�������






-- �����û��������������



-----�ϴ�����
   git config user.name "zzzzzzcc"  
   git config user.email 'qq869565225@163.com' 

   
  git init
  git add .
  git commit -m "first commit"
  git remote add origin https://github.com/zzzzzzcc/-
  git push -u origin master
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
- ��ʼ��һ������GIT�ִ�

```shell
cd ��ǰ��ĿĿ¼
git init // ��ʼ��һ�����صĲֿ�
```
ע��ִ��git init���ڹ���Ŀ¼�»ᴴ��.gitĿ¼����Ŀ¼��windows�������صġ�
	��Ҫͨ�� �ļ���ѡ�� > �鿴 > ��ʾ���ص��ļ�

> �����ڱ����ļ����������һ��.git���ļ������ڼ�¼���е���Ŀ�����Ϣ

- �鿴���زִ��ı��״̬

git status
���ڲ鿴���زִ���״̬
��һ�β鿴����ʾ����һ��û�б����ٵ��ļ�

git status -s // -s �������Ҫ�ı����־

- ��ӱ����ݴ棨�йܣ��ļ�

git add
git add .  -��ӳ������嵥.gitignore�е������ļ�
git add --all -��ӳ������嵥.gitignore�е������ļ�

���Խ�һ��û�б����ٵ��ļ���ӵ������б�

������node_modules�������ʵ��ļ��ǲ�Ӧ�ñ�����

- ��ӱ���GIT�����嵥�ļ�

�ڴ�����ļ��еĸ�Ŀ¼���һ��.gitignore�ļ�
���ļ�����˵�����Ե��ļ�����Щ

- �ύ���йܵ��ļ��仯�����زִ�

git commit
�����صı仯�ύ�ı��صĲֿ��ļ��й鵵
һ��������һ��С��Ԫ������仯�����ύ
git commit -m '�ύ��־'
- �ԱȲ���

git diff
�������ڶԱȵ�ǰ״̬�Ͱ汾����״̬�ı仯

- �ύ��־

git log 
���Բ鿴�ύ��־

- �ع鵽ָ���汾

git reset --hard

- Ϊ�ִ����Զ�ˣ��������ˣ���ַ

- �����زִ����ύ��¼���͵�Զ�˵�master��֧

- ��ȡԶ��master��֧�ĸ��¼�¼������

- �ع鵽ָ���汾

### GITHUB����ʹ��

- https://github.com/
- GITHUB��һ��GIT������ṩ�̣�
- 
- ����罻�����

http://zoomzhao.github.io/code-guide/
https://github.com/jobbole/awesome-javascript-cn
https://github.com/jobbole/awesome-css-cn




�鿴����ӡ��ύ��ɾ�����һأ������޸��ļ�

git help <command> # ��ʾcommand��help

git show # ��ʾĳ���ύ������ git show $id

git co -- <file> # �����������޸�

git co . # �����������޸�

git add <file> # �������ļ��޸��ύ�������ݴ���

git add . # �������޸Ĺ��Ĺ����ļ��ύ�ݴ���

git rm <file> # �Ӱ汾����ɾ���ļ�

git rm <file> --cached # �Ӱ汾����ɾ���ļ�������ɾ���ļ�

git reset <file> # ���ݴ����ָ��������ļ�

git reset -- . # ���ݴ����ָ��������ļ�

git reset --hard # �ָ����һ���ύ����״̬���������ϴ��ύ������б����޸�

git ci <file> git ci . git ci -a # ��git add, git rm��git ci�Ȳ������ϲ���һ����������������������������������������������������������������������������git ci -am "some comments"

git ci --amend # �޸����һ���ύ��¼

git revert <$id> # �ָ�ĳ���ύ��״̬���ָ���������Ҳ�������ύ����

git revert HEAD # �ָ����һ���ύ��״̬

�鿴�ļ�diff

git diff <file> # �Ƚϵ�ǰ�ļ����ݴ����ļ����� git diff

git diff <id1><id1><id2> # �Ƚ������ύ֮��Ĳ���

git diff <branch1>..<branch2> # ��������֧֮��Ƚ�

git diff --staged # �Ƚ��ݴ����Ͱ汾�����

git diff --cached # �Ƚ��ݴ����Ͱ汾�����

git diff --stat # �����Ƚ�ͳ����Ϣ

�鿴�ύ��¼

git log git log <file> # �鿴���ļ�ÿ���ύ��¼

git log -p <file> # �鿴ÿ����ϸ�޸����ݵ�diff

git log -p -2 # �鿴���������ϸ�޸����ݵ�diff

git log --stat #�鿴�ύͳ����Ϣ

tig

Mac�Ͽ���ʹ��tig����diff��log��brew install tig

Git ���ط�֧����

�鿴���л���������ɾ����֧

git br -r # �鿴Զ�̷�֧

git br <new_branch> # �����µķ�֧

git br -v # �鿴������֧����ύ��Ϣ

git br --merged # �鿴�Ѿ����ϲ�����ǰ��֧�ķ�֧

git br --no-merged # �鿴��δ���ϲ�����ǰ��֧�ķ�֧

git co <branch> # �л���ĳ����֧

git co -b <new_branch> # �����µķ�֧�������л���ȥ

git co -b <new_branch> <branch> # ����branch�����µ�new_branch

git co $id # ��ĳ����ʷ�ύ��¼checkout���������޷�֧��Ϣ���л���������֧���Զ�ɾ��

git co $id -b <new_branch> # ��ĳ����ʷ�ύ��¼checkout������������һ����֧

git br -d <branch> # ɾ��ĳ����֧

git br -D <branch> # ǿ��ɾ��ĳ����֧ (δ���ϲ��ķ�֧��ɾ����ʱ����Ҫǿ��)

 ��֧�ϲ���rebase

git merge <branch> # ��branch��֧�ϲ�����ǰ��֧

git merge origin/master --no-ff # ��ҪFast-Foward�ϲ���������������merge�ύ

git rebase master <branch> # ��master rebase��branch���൱�ڣ� git co <branch> && git rebase master && git co master && git merge <branch>

 Git��������(�����ڶ�̨�����Ͽ���ͬ��ʱ��)

git diff > ../sync.patch # ���ɲ���

git apply ../sync.patch # �򲹶�

git apply --check ../sync.patch #���Բ����ܷ�ɹ�

 Git�ݴ����

git stash # �ݴ�

git stash list # ������stash

git stash apply # �ָ��ݴ������

git stash drop # ɾ���ݴ���

GitԶ�̷�֧����

git pull # ץȡԶ�ֿ̲����з�֧���²��ϲ�������

git pull --no-ff # ץȡԶ�ֿ̲����з�֧���²��ϲ������أ���Ҫ����ϲ�

git fetch origin # ץȡԶ�ֿ̲����

git merge origin/master # ��Զ������֧�ϲ������ص�ǰ��֧

git co --track origin/branch # ����ĳ��Զ�̷�֧������Ӧ�ı��ط�֧

git co -b <local_branch> origin/<remote_branch> # ����Զ�̷�֧�������ط�֧������ͬ��

git push # push���з�֧

git push origin master # ����������֧�Ƶ�Զ������֧

git push -u origin master # ����������֧�Ƶ�Զ��(����Զ������֧�򴴽������ڳ�ʼ��Զ�ֿ̲�)

git push origin <local_branch> # ����Զ�̷�֧�� origin��Զ�ֿ̲���

git push origin <local_branch>:<remote_branch> # ����Զ�̷�֧

git push origin :<remote_branch> #��ɾ�����ط�֧(git br -d <branch>)��Ȼ����pushɾ��Զ�̷�֧

GitԶ�ֿ̲����

GitHub

git remote -v # �鿴Զ�̷�������ַ�Ͳֿ�����

git remote show origin # �鿴Զ�̷������ֿ�״̬

git remote add origin git@ github:robbin/robbin_site.git # ���Զ�ֿ̲��ַ

git remote set-url origin git@ github.com:robbin/robbin_site.git # ����Զ�ֿ̲��ַ(�����޸�Զ�ֿ̲��ַ) git remote rm <repository> # ɾ��Զ�ֿ̲�

����Զ�ֿ̲�

git clone --bare robbin_site robbin_site.git # �ô��汾����Ŀ�������汾�ֿ�

scp -r my_project.git git@ git.csdn.net:~ # �����ֿ��ϴ�����������

mkdir robbin_site.git && cd robbin_site.git && git --bare init # �ڷ������������ֿ�

git remote add origin git@ github.com:robbin/robbin_site.git # ����Զ�ֿ̲��ַ

git push -u origin master # �ͻ����״��ύ

git push -u origin develop # �״ν�����develop��֧�ύ��Զ��develop��֧������track

git remote set-head origin master # ����Զ�ֿ̲��HEADָ��master��֧

Ҳ�����������ø���Զ�̿�ͱ��ؿ�

git branch --set-upstream master origin/master

git branch --set-upstream develop origin/develop


