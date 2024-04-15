import React from 'react';
import './style/header.css'

function Header(): JSX.Element {
    return(
     <>
     <div className='header'>
        <img className='logo' src="https://s3-alpha-sig.figma.com/img/c3d6/b58e/495f41aba75f273b6de3dab3455a9be0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWZ-SFA07niV1-NTyHykuqWtfG5d0Xz~PEdEqM2aDs9CRdw~02JWl84qC5uiKQem5iueo1tKMnrKsrS-6SaJpMfUo1caKHHPifSxDNb8OjAakC20u1nDKXlWnb1lTABYVuIk2daNE2SX4BHII6ow4YqED4RWEcb9qfloN2y4WwDxVQB2KKP8f5V4X1A1SupW-BNhoudix95lfTcTzR4mT5eT89FG0Qun9gPYyXKlZkrWz8tODHnHoD1a-6dSEvF9GX2Ny-WcfpNz~HOT3LFa5EQ6GfQ0Pcn~tn6-9kVoEcxOq8Pmc9GH6pdZ~DAZLsvCfcZN-gQH4mkiccy-Ix3s7g__" alt="Диана сказала написать что это логотип" />
        <h1 className='studio'>студия звукозаписи</h1>
        <div className='address'><img className='location' src="https://s3-alpha-sig.figma.com/img/b39e/34b8/e7f1f7e60c4cdefa290e026f60cc2d1a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NmwInblDkHQ-PPPNYtujW7uciehJU~3kD2eFDS2WvgHrcF5QJvLZR5ZLP8mqURZcwS9BJMdxdpqz4fXAKyTNaWnVHt8qDjnH4mgAGS3ZSA3sM4H~3JFE2es8bGbwUGdafnu8b9orW4myrR5BH3bV4uFbVrfJBHmWQ7FzR78awD763bwEFXBwpRQZI4k~ndy0vCQYIXrCulVzaOtOnxXaUJ~kG5bL4tKNv3cGYoFlbDUfe8sDZCroSJqLtW5cqBLsa589DVz3suR8RKfx8PzGk5IuPAo9jsaoy~wF8mOlHlkdpgecXc6kr4L1O3ltQTqVIwLzlRcXPGr73DUZ8zQoAw__" alt="тоже Диана пилит" />
        <h3>Rare Studio (м. Площадь Восстания) [spb]</h3>
        </div>
        <div className='logos'>
        <img className='vklogo' src="https://s3-alpha-sig.figma.com/img/4403/6c79/737dd4d9f9a76fc05b47696ecbb3d2d2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9ESc7tGEuIg7YQFu7gN2eRtgk45jyLIwreW7WCJrW0GQefhxHufzhzaDtCZRYs-~kELonQz-I1CsHdl1VoqVLbjUAeipzSaxKb7ZzUuPyweGozpvSWwBE8EFTXt0XOUVmbmE5yfiBl4h6kLedFGe4IvlEBs-FyOKIwaIEcJ~6pfoBqv7xAhsgkBpi1iFUl4CRKz~2KF1fbKpJWxzXcZ3Vif~o2DUoARd3ODA55N9sKLS7tELZUPKiQFjc805bPtvQ2ra4vjFHGX~6IoyzmYZUkOEEfVVxFBrrIkWSjPHd32WN8RPT~Fq2dkkK71CbSrOQaZw3-Y6RzcbF6ffE2DDw__" alt="да еще одна для Дианы" />
        <img  className='tglogo' src="https://www.pngall.com/wp-content/uploads/11/Telegram-Logo-PNG-HD-Image.png" alt="тг лого" />
        </div>
     </div>
     </>
    );
}
export default Header;