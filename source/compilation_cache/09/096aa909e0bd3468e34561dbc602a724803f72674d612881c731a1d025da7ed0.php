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

/* books.html */
class __TwigTemplate_00e8b465a92c30472c558bbbda050322f25348fd8fb57e3adc659fbbcbe5d3c2 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("base.html", "books.html", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo " Серия книг о Шерлоке Холмсе ";
    }

    // line 5
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 6
        echo "
<h1>Серия романов о Гарри Поттере</h1>

<div id=\"books\">
  ";
        // line 10
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["elem_books"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["book"]) {
            // line 11
            echo "  <div class=\"book\">
    <strong>";
            // line 12
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["book"], "number", [], "any", false, false, false, 12), "html", null, true);
            echo "</strong>. \"<em>";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["book"], "title", [], "any", false, false, false, 12), "html", null, true);
            echo "\"</em> - ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["book"], "date", [], "any", false, false, false, 12), "html", null, true);
            echo "
  </div>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['book'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 15
        echo "</div>

";
    }

    public function getTemplateName()
    {
        return "books.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 15,  71 => 12,  68 => 11,  64 => 10,  58 => 6,  54 => 5,  47 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "books.html", "X:\\html-academy-sedona\\source\\templates\\books.html");
    }
}
