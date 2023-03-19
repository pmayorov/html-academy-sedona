<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* base.html */
class __TwigTemplate_c223df6d1117fefb8416a3264f8e037a2e514dafe3e791b0c424467988448832 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"ru\">

<head>
  <meta charset=\"UTF-8\">
  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>";
        // line 8
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
</head>

<body>

  <div id=\"content\">
    ";
        // line 14
        $this->displayBlock('content', $context, $blocks);
        // line 16
        echo "  </div>

</body>

</html>
";
    }

    // line 8
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
    }

    // line 14
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 15
        echo "    ";
    }

    public function getTemplateName()
    {
        return "base.html";
    }

    public function getDebugInfo()
    {
        return array (  78 => 15,  74 => 14,  68 => 8,  59 => 16,  57 => 14,  48 => 8,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "base.html", "X:\\html-academy-sedona\\source\\templates\\base.html");
    }
}
