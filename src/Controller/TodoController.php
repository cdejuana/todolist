<?php


namespace App\Controller;

use App\Entity\TODO;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TodoController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }

    public function login(): Response
    {
        return $this->render('login.html.twig');
    }

    public function creaLista($datosLista)
    {
        $lista = new TODO();
        $lista->setNombre($datosLista[0]);
        $lista->getFechaCreacion(new Date());
        $lista->setEstado($datosLista[1]);

        $em = $this->getDoctrine()->getManager();
        $em->persist($lista);
        $em->flush();

        //return new Response('Created product id '.$lista;
    }
}