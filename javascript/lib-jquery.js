function change_room() {
    $(document).ready(function(){
        $(button).click(function(){
            $("#change_y_name").hide();
            $("#change_p_profile").hide();
            $("#change_room").show();
        });
    });
}

function change_y_name() {
    $(document).ready(function(){
        $(button).click(function(){
            $("#change_room").hide();
            $("#change_p_profile").hide();
            $("#change_y_name").show();
        });
    });
}

function change_p_profile() {
    $(document).ready(function(){
        $(button).click(function(){
            $("#change_room").hide();
            $("#change_y_name").hide();
            $("#change_p_profile").show();
        });
    });
}

function kill_switch() {
    $(document).ready(function(){
        $(button).click(function(){
            $("*").hide();
            $("*").hide();
            $("*").hide();
        });
    });
}