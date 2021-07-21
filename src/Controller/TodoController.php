<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TodoController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}