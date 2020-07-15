$(document).ready(function(){
    $('#registerRegis').click(function(){
        $.ajax({
            url:'http://localhost:5000',
            method:'POST',
            data:{
                f_name:$('#firstName').val(),
                l_name:$('#lastName').val(),
                shop_name:$('#shopname').val(),
                phno:$('#phone').val(),
                pincode:$('#pincode').val(),
                address:$('#address').val(),
                email:$('#email').val(),
                password:$('#password').val(),
            },
            success: function(){
                $('#myModal').on('shown.bs.modal', function () {
                    $('#myInput').trigger('focus')
                  })
            }
        })
        
    });

    $('#loginRegis').click(function(){
        $.ajax({
            url:'http://localhost:5000',
            method:'POST',
            data:{
                email:$('#email').val(),
                password:$('#password').val(),
            },
            success: function(){
                window.location.href = "interface.html";
            }
        })
        
    });

    $('#registerCustom').click(function(){
        $.ajax({
            url:'http://localhost:5000',
            method:'POST',
            data:{
                f_name:$('#firstName').val(),
                l_name:$('#lastName').val(),
                shop_name:$('#shopname').val(),
                phno:$('#phone').val(),
                pincode:$('#pincode').val(),
                address:$('#address').val(),
                email:$('#email').val(),
                password:$('#password').val(),
            },
            success: function(){
                $('#myModal').on('shown.bs.modal', function () {
                    $('#myInput').trigger('focus')
                  })
            }
        })
    });

    $('#loginCustom').click(function(){
        $.ajax({
            url:'http://localhost:5000',
            method:'POST',
            data:{
                email:$('#email').val(),
                password:$('#password').val(),
            },
            success: function(){
                window.location.href = "interface.html";
            }
        })
    });
    
});