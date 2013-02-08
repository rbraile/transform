/*

*/

jQuery.fn.extend({
  Transform: function(options) {

      var form = $(this);

      if(form.length > 0) {

        /*---- statement of radio-----*/
        if($(this).find("input[type=radio]").length > 0) {
          $(this).find("input[type=radio]").each(function (radio_index) {
            $(this).css("display","none");            
            $(this).after("<a rel='" + $(this).attr("name") + "'class='radio' title='radio' href='javascript:void(0);'>" + $(this).val() + "</a>");
          });

          $("a.radio").click(function () {
            var radio_name = $(this).attr("rel");
            var radio_value = $(this).text();

            $(form).find("input[name='" + radio_name + "']").removeAttr("checked");
            $(form).find("[rel='" + radio_name + "']").removeClass("selected");

            $(form).find("input[name='" + radio_name + "'][value='" + radio_value + "']").attr("checked", "checked");
            $(this).toggleClass("selected");


          });
           

        }

        /*---- End of statement of radio -----*/

        /*---- statement of checkbox -----*/
        if($(form).find("input[type=checkbox]").length > 0) {

          $(form).find("input[type=checkbox]").each(function (checkbox_index) {
            var checkbox_value = $(this).val();
            $(this).css("display","none");            
            $(this).after("<a class='checkbox' title='check' href='javascript:void(0);' rel='" + checkbox_value + "'>" + checkbox_index + "</a>"); 
          });
          
        }

        $("a.checkbox").toggle(function () {
          var checkbox_value = $(this).attr("rel");
          $(this).addClass("selected");
          $(form).find("input[value=" + checkbox_value + "]").attr("checked", "checked");
        }, function() {
          var checkbox_value = $(this).attr("rel");
          $(this).removeClass("selected");
          $(form).find("input[value='" + checkbox_value + "']").removeAttr("checked");
        });

        /*---- statement of checkbox END OF -----*/

        /*---- statement of select -----*/
        form.find("select").each( function(select_index) {
          var variable_list = "";
          var class_selected = 'class="selected"';
          $(this).find("option").each( function(index) {            
            variable_list += '<li ' + class_selected + '><a rel="' + select_index + '-' + index + '" href="javascript:void(0);" title="' + $(this).html() + '">' + $(this).html() + '</a></li>';
             class_selected = "";
          });

          variable_list = '<ul class="' + options.container + '-list ' + options.container + '-list-' + select_index + '">' + variable_list + '</ul>';
          
          $(this).after(variable_list);
        });
      }

      $('.' + options.container + '-list li a').click(function() {
        $(this).parent().parent("ul").toggleClass("show");
        var index = $(this).attr("rel");
        $(this).parent().parent("ul").find("li.selected").removeClass("selected");
        $(this).parent("li").addClass("selected");
        index = index.split('-');
        var select_list = form.find("select");

        select_list.eq(index[0]).find("option").removeAttr("selected");
        select_list.eq(index[0]).find("option").eq(index[1]).attr("selected", "selected");

      });
      /*---- statement of checkbox END OF -----*/

      /*---- statement of textarea -----*/

      /*if($(form).find("textarea").length > 0) {
        $(this).children("textarea").each( function(index) { 
          $(this).css("display","none");
          $(this).after('<div id="ejemplo" style="background:gray;width: 300;height:150;overflow: auto;overflow-x: hidden">write here </div>')
        });
      }*/

      /*---- statement of textarea END OF -----*/

  }
});