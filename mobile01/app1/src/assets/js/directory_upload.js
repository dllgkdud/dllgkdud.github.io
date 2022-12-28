const input = document.querySelector('#directory_upload');
const preview = document.querySelector('.file_list');

input.addEventListener('change', showTextFile);
 
function showTextFile() {
    const selectedFiles = input.files;
    const list = document.createElement('ul');
    preview.appendChild(list);
 
    for(const file of selectedFiles) {
        const listItem = document.createElement('li');
        const linker = document.createElement('a');
        const summary = document.createElement('div');
 
        summary.textContent = file.webkitRelativePath;
        linker.setAttribute('src', file.webkitRelativePath);
        linker.setAttribute('target', "#target_vdo");
        linker.appendChild(summary);
        listItem.appendChild(linker);
        list.appendChild(listItem);
    }
}