$(document).ready(function () {
        $("#searchButton").click(function () {
            var search_word = $("#locationInput").val();
            $.ajax({
                url: "http://location-backend-service.herokuapp.com/locations?name=" + search_word
            }).done(function (data) {
                $("#results").empty();
                var template = '<div class="panel large-12 columns"> \
                                    <h5>name</h5> \
                                    <h6>description</h6> \
                                    <a href="#" class="like button tiny right">Like</a> \
                                </div>';

                $.each(data, function (index, value) {
                    $("#results").append(template.replace("name", value["name"]).replace("description", value["description"]));
                });

            }).fail(function () {
                alert("fail");
            })
        });
        $('#results').on('click', '.like', function () {
            var name = $(this).siblings('h5')[0].innerHTML;
            $("#likedPlaces ul").append('<li class="like">' + name + '</li>');
        });
    }
);
