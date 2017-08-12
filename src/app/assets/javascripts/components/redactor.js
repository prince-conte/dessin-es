function testButton(obj, event, key)
{
    obj.execCommand('underline');
}

$(document).ready(
    function()
    {
        var buttons = ['formatting', 'bold', 'italic' , 'unorderedlist', 'orderedlist', 'horizontalrule', 'deleted', '|', 'link', 'image', 'file'];

        $('#redactor').redactor({
            focus: true,
            buttons: buttons

        });


    }
);
