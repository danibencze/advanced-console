var cmd=require('node-cmd');

    cmd.get(
        'pwd',
        function(err, data, stderr){
            console.log('the current working dir is : ',data)
        }
    );

    cmd.run('touch example.created.file');

    cmd.get(
        'ls',
        function(err, data, stderr){
            console.log('the current dir contains these files :\n\n',data)
        }
    );

    cmd.get(
        'dir',
        function(err, data, stderr){
            console.log('Dir is :\n\n',data)
        }
    );
