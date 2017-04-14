$(document).ready(function() {
    var food = new Array('Pizza', 'Meat', 'Melon', 'Chicken', "Lasagna", "Eggs");
    $("#selectMenu").bootmenu({
        items: food,
        defaultText: "Select your favorite food",
        listName: "Food",
        callback: function(value1) {
            alert(value1);
            $("#selectMenu2").bootmenu({
                items: food,
                defaultText: "This is the second menu",
                listName: "MenuTwo",
                callback: function(value2) {
                    alert(value2);
                }
            });
        }
    });
});
