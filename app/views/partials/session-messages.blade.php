@if (Session::has('info'))
<div class="alert adjusted alert-info fade in">
    <button class="close button" data-dismiss="alert">
        ×
    </button>
    <i class="fa-fw fa-lg fa fa-info"></i>
    {{{ Session::get('info') }}}
</div>
@elseif (Session::has('success'))
<div class="alert adjusted alert-success fade in">
    <button class="close button" data-dismiss="alert">
        ×
    </button>
    <i class="fa-fw fa-lg fa fa-check"></i>
    {{{ Session::get('success') }}}
</div>
@elseif (Session::has('failure'))
<div class="alert adjusted alert-danger fade in">
    <button class="close button" data-dismiss="alert">
        ×
    </button>
    <i class="fa-fw fa-lg fa fa-exclamation"></i>
    {{{ Session::get('failure') }}}
</div>
@endif