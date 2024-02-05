function myfunction() {
    var heading = document.getElementById('heading');
    var currentSize = parseInt(window.getComputedStyle(heading, null).getPropertyValue('font-weight'));

    // Ternary operator to toggle between small and large font sizes
    var newSize = currentSize === 300 ? 600 : 300;

    heading.style.fontWeight = newSize;
    heading.style.borderWidth= '3px';
    heading.style.borderColor= 'blue';
    heading.style.borderStyle= 'dashed';
    heading.style.borderRadius= '10px';
    heading.style.backgroundColor= 'yellow';
    heading.style.color= 'blue';
    heading.style.padding= '10px';
    heading.style.margin= '10px';
    
}
