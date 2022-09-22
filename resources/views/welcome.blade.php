<!DOCTYPE html>
<html lang="en-np">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
        <title>Dipu Society</title>

       

    </head>
    <body>
        <div id="app">
            {{-- <app-component></app-component> --}}
            <navbar-component></navbar-component>
            <router-view></router-view>
        </div>
        
    </body>

    <script src="{{ mix('js/app.js') }}"></script>
    
</html>
