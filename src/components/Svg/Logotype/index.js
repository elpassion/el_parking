import classNames from 'classnames';

import style from '../style.scss';

const Logotype = ({ className }) => {
  const svgClasses = classNames(style.logotype, className);
  return (
    <svg
      className={svgClasses}
      width='111'
      height='39'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <defs>
        <path id='a' d='M0 .056h28.854v25.092H0z' />
      </defs>
      <g fill='none' fillRule='evenodd'>
        <g transform='translate(36.137 .64)'>
          <mask id='b' fill='#fff'>
            <use xlinkHref='#a' />
          </mask>
          <path
            d='M14.886 9.026l-1.235 2.772c-.502-.212-.983-.593-1.13-1.016a.49.49 0 0 1.063-.444c.293-.614 1.528-1.122
            2.302-1.312M27.55 3.8C25.499 1.537 21.208.056 16.666.056c-.838 0-1.696.042-2.533.148-5.63.698-10.32
            3.173-12.831 6.791-1.32 1.84-1.654 3.935-.921 5.67.607 1.418 2.218 3.195 6.426 3.703.188.02.481 0
            .628-.339l.69-1.46a.262.262 0 0 0-.02-.275.257.257 0 0
            0-.23-.148c-3.601-.317-4.857-1.544-5.297-2.518-.44-.973-.209-2.158.628-3.342C5.3 5.28
            9.318 3.229 14.216 2.658c.691-.085 1.403-.127 2.115-.127 3.83 0 7.619 1.248 9.23 3.025.545.593.775
            1.185.733 1.778-.23 2.623-5.714 4.866-10.068
            4.866h-.314l1.947-4.295c.062-.127.041-.296-.084-.381l-1.382-1.058c-.062-.063-.167-.085-.272-.063-1.82.402-4.458
            1.015-5.672 2.877a2.752 2.752 0 0 0-.293 2.39c.335 1.016 1.256 1.863 2.49 2.328l-4.353
            9.69c-.063.127-.042.296.084.38l1.297 1.016a.335.335 0 0 0 .189.064c.02 0 .062 0 .083-.022a.351.351
            0 0 0 .23-.19l4.69-10.41c.48.064.983.086 1.506.086 2.659 0 5.652-.72 7.996-1.926 2.7-1.396
            4.27-3.3 4.459-5.374.146-1.248-.314-2.454-1.277-3.512'
            fill='#FFF'
            mask='url(#b)'
          />
        </g>
        <path
          d='M66.528 18.996a.36.36 0 0 0 .062-.211.223.223 0 0
          0-.104-.19l-1.235-.953c-.105-.085-.251-.063-.356.021l-5.582
          4.359.649-1.693c.062-.127.02-.254-.084-.339l-1.382-1.036a.351.351
          0 0 0-.209-.064.404.404 0 0 0-.188.106c-2.659 3.83-4.291 4.655-5.422
          4.655-2.03 0-.67-2.645.691-3.893.942-.868 3.475-2.814 6.991-1.27.147.064.293
          0 .356-.127l.65-1.396a.194.194 0 0 0 0-.212.254.254 0 0 0-.147-.148c-3.245-1.438-6.678-.761-9.273
          1.63-1.905 1.777-2.784 4.062-2.198 5.69.398 1.1 1.423 1.82 2.826 1.82.983 0 2.49-.275
          4.48-2.179l-.126.656c-.021.106.02.211.104.275.084.063.942.72 1.34
          1.015.104.085.251.064.356-.02l7.236-6.03M100.385 19.38a.263.263 0 0
          0-.251-.022c-.435.635-3.663 2.842-4.249 3.534 1.298-3.555 1.78-4.909
          1.947-5.353a.302.302 0 0 0-.084-.339l-1.277-.973c-.083-.063-.188-.084-.272-.042-2.533
          1.015-4.375 2.306-5.882 3.681l.69-1.925a.296.296 0 0 0-.083-.317l-1.297-.995a.26.26
          0 0 0-.356.042c-.88.931-4.361 1.843-5.303 1.97l-.084 2.073c.544-.042 3.628-.53
          4.152-.721L86.34 24.69a.272.272 0 0 0 .105.317l1.298.974a.288.288 0 0 0
          .23.042.266.266 0 0 0 .188-.148c.544-1.016 2.575-4.507 6.929-6.897-.754
          2.03-1.214 3.3-2.198 6.072-.042.126 0 .254.104.317l1.361.91c.105.063.23.063.314
          0 .898-.69 1.8-1.587 5.323-4.077M88.83 12.992a1.909 1.909 0 0 1-1.906 1.925 1.909
          1.909 0 0 1-1.904-1.925c0-1.08.858-1.925 1.904-1.925 1.047 0 1.905.867 1.905 1.925'
          fill='#FFF'
        />
        <path
          d='M84.696 21.907l1.55-4.21c.041-.127 0-.254-.105-.318l-1.466-.952a.318.318 0 0 0-.334
          0l-4.585 4.485c-.188-.211 1.34 1.608 1.34 1.608l1.926-1.798-1.654 4.104a.296.296 0 0 0
          .084.318l1.193.91c.105.084.251.063.356-.022'
          fill='#FFF'
        />
        <path
          d='M63.253 25.199a.425.425 0 0 1-.221-.478l1.504-6.333 2.035.494-.614 2.586c2.267-2.341
          5.387-5.03 7.75-5.03l1.044 1.13c-.143 2.127.198 5.096 1.213 5.536.562.244 1.927-.135
          4.085-2.515l1.543 1.43c-2.646 2.918-4.758 3.766-6.455
          3.029-2.122-.921-2.49-4.14-2.512-6.207-.882.391-2.272 1.289-4.342 3.303a49.278 49.278 0
          0 0-3.29 3.565.415.415 0 0 1-.506.107l-1.234-.617z'
          fill='#FFF'
        />
        <path
          d='M70.428 25.703l-1.152-.507a.425.425 0 0 1-.216-.557l7.966-17.797a.417.417 0 0
          1 .551-.219l1.152.507c.212.093.31.342.217.557l-7.967 17.797a.417.417 0 0 1-.551.219'
          fill='#FFF'
        />
        <path
          d='M71.475 18.405s6.663-5.729 7.976-2.867c1.362 2.969-7.995 2.969-7.995 2.969'
          stroke='#FFF'
          strokeWidth='2.068'
          strokeLinejoin='bevel'
        />
        <path
          d='M103.845 23.233l3.207-7.18a.417.417 0 0 1 .555-.208l1.141.53c.21.097.303.348.207.56l-3.347
          7.493c-.994 2.226-2.803 1.134-1.763-1.195z'
          fill='#FFF'
        />
        <path
          d='M106.45 20.703a.308.308 0 0 0-.069-.338l.046-.825a.247.247 0 0 0-.17-.064.318.318 0 0
          0-.151.106c-2.148 3.83-4.12 4.02-5.033 4.02-1.64 0-.541-2.645.558-3.893.76-.867 2.806-2.814
          5.646-1.27.119.064.237 0 .288-.126l.524-1.396a.234.234 0 0 0 0-.212.236.236 0 0
          0-.118-.148c-2.62-1.439-5.393-.762-7.49 1.629-1.538 1.777-2.248 4.062-1.775 5.691.321
          1.1 1.15 1.82 2.282 1.82 2.813 0 4.634-1.665 5.461-4.994z'
          fill='#FFF'
        />
        <path
          d='M96.658 35.063c.058.645.502 1.218 1.005 1.379.458.147.884-.078 1.242-.915a349.18
          349.18 0 0 1 1.593-3.667c-2.74.691-3.959 1.89-3.84 3.203zm3.994 1.21c-.726
          1.699-2.129 2.44-3.569 1.978-1.241-.398-2.191-1.624-2.317-3.017-.24-2.651
          2.067-4.664 6.67-5.484.991-2.215 3.077-7.596 4.256-10.14l1.724.799c-.99
          2.135-2.913 7.154-3.77 9.056.941-.08 3.953-.12 5.035-.117h1.316a.2.2 0 0 1
          .177.293l-.79 1.5a.2.2 0 0 1-.176.107h-.527c-1.481-.005-4.786.069-5.925.206-.76
          1.71-1.462 3.317-2.104 4.82z'
          fill='#FFF'
          fillRule='nonzero'
        />
        <g fillRule='nonzero'>
          <ellipse fill='#00C5C5' cx='13.81' cy='14' rx='13.81' ry='14' />
          <path
            d='M14.294 17v1.84H7.891V9h6.32v1.84H9.9v2.12h3.933v1.8H9.9V17h4.394zm7.407 0v1.84h-5.984V9h2.05v8h3.934z'
            fill='#FFF'
          />
        </g>
      </g>
    </svg>
  );
};

export default Logotype;
