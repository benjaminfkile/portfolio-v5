import $ from "jquery"

const hblService = {
    go: true,
    init: () => {
        var mouse = {
            X: 0,
            Y: 0,
            CX: 0,
            CY: 0
        },
            block = {
                X: mouse.X,
                Y: mouse.Y,
                CX: mouse.CX,
                CY: mouse.CY
            },
            imags = [
                '/res/bg_pic.jpg',
            ];

        $('.block').on('mousemove', function (e) {
            mouse.X = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
            mouse.Y = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
        })

        $('.block').on('mouseleave', function (e) {
            mouse.X = mouse.CX;
            mouse.Y = mouse.CY;
        })

        setInterval(function () {
            if (hblService.go) {
                block.CY += (mouse.Y - block.CY) / 12;
                block.CX += (mouse.X - block.CX) / 12;

                $('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
                $('.block').css({
                    transform: 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
                })
            }
        }, 20);

        $('.HeaderBGSlider .item').each(function (i) {

            if (i === 0) {

                $(this).addClass('active');
                $(this).next().addClass('next');
                $(this).prev().addClass('prev');
            }

            $(this).attr('id', 'slide-' + i);

            $(this).prepend(
                $('<div>', { class: 'blur', style: 'background-image: url(' + imags[i] + ');' }),
                $('<div>', { class: 'bg', style: 'background-image: url(' + imags[i] + ');' })
            )

            $(this).find('.block').css('background-image', 'url(' + imags[i] + ')')

            $('.navigations .dots').append(
                $('<li>', { class: i === 0 ? 'active' : '', id: i }).on('click', function () {
                    var cSlide = $('.HeaderBGSlider #slide-' + $(this).attr('id'));

                    $('.navigations .dots li').removeClass('active');
                    $(this).addClass('active');

                    $('.HeaderBGSlider .item').removeClass('active prev next');
                    cSlide.addClass('active');
                    cSlide.next().addClass('next');
                    cSlide.prev().addClass('prev');
                })
            )
        })
    }
}

export default hblService





