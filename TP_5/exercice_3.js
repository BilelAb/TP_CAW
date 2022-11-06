const {
    join
} = require('path');
const fs = require('fs');
const path = require('path');
const pathProject = process.cwd();
const grep = (search, dirs = []) => {
    let count = 0;
    let countInDosier = 0;
    let countSubDosier = 0;
    dirs.map((dir) => {
        if (dir.includes('.txt')) {
            if (helper(pathProject, dir, search)) {
                console.log('existe dans le fichier : ' + dir.toUpperCase()) 
                count++;
            }
        } else {
            fs.readdir(dossierDir = path.join(pathProject, dir), (err, files) => {
                if (err) {
                    return console.log(err);
                }
                files.map((file) => {
                    if (!file.includes('.txt')) {
                        fs.readdir(subDossier = path.join(dossierDir, file), (err, files2) => {
                            if (err) {
                                return console.log(err);
                            }
                            files2.map((file2) => {
                                if (file.includes('.txt')) {
                                    return;
                                }
                                if (helper(subDossier, file2, search)) {
                                    console.log('existe dans le sous-Dossier ' + file.toUpperCase() + " dans le dossier " + dir.toUpperCase() + ' dans le fichier : ' + file2.toUpperCase())
                                     countSubDosier++;
                                }
                            })
                        }) 
                        return;
                    }
                    if (helper(dossierDir, file, search)) {
                        console.log('existe dans le dossier ' + dir.toUpperCase() + ' dans le fichier ' + file.toUpperCase()) 
                        countInDosier++;
                    }
                });
            });
        }
    }) 
    setTimeout(() => {
        if (count === 0) {
            console.log('None')
        } else {
            console.log(count + ' Fichiers trouvés ') 
            console.log(countInDosier + ' Fichiers trouvés ( dossier ) ') 
            console.log(countSubDosier + ' Fichiers trouvés ( sous-dossier )')
        }
    }, 1000)
}
const helper = (path, dir, search) => {
    return fs.readFileSync(join(path, dir), {
        encoding: 'utf8'
    }).includes(search)
}
grep('bilel', ['dummy.txt', 'dummy1.txt', 'dummyDossier'])
