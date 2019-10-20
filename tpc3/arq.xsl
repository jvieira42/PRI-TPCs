<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <style>
                    body {
                        background-color: #e6e6ff;
                    }
                    a {
                        color: black;
                        text-decoration: none;
                    }
                    
                    a:hover {
                        text-decoration: underline;
                        color: #A52A2A;
                    }
                    
                    li {
                        color: #A52A2A;
                    }
                    h1 {
                        color: #A52A2A;
                    }
                </style>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1>Arqueossítios do Nordeste Português</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="website/{generate-id()}.html">
            <html>
                <style>
                    body {
                        background-color: #e6e6ff;
                    }
                    a {
                        color: blue;
                    }
                    h1 {
                        color: #A52A2A;
                    }
                    hr {
                        color: #A52A2A;
                    }
                </style>
                <head>
                    <title>Arqueossítios: Página Individual</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1><xsl:value-of select="IDENTI"/></h1>
                    <hr/>
                    <table>
                        <tr>
                            <th>Código: </th><td><xsl:value-of select="CODADM"/></td>
                            <th>Concelho: </th><td><xsl:value-of select="CONCEL"/></td>                            
                        </tr>
                        <tr>
                            <th>Descrição: </th><td><xsl:value-of select="DESCRI/LIGA"/></td>
                            <th>Freguesia: </th><td><xsl:value-of select="FREGUE"/></td>
                            
                        </tr>
                        <tr>
                            <th>Lugar: </th><td><xsl:value-of select="LUGAR"/></td> 
                            <th>Cronologia: </th><td><xsl:value-of select="CRONO"/></td>               
                        </tr>
                    </table>                    
                    <hr/>
                    <h3>Coordenadas</h3>
                    <table>
                        <tr>
                            <th>Latitude: </th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Longitude: </th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Altitude: </th><td><xsl:value-of select="ALTITU"/></td>
                        </tr>
                    </table>
                    <hr/>
                    <xsl:apply-templates/> 
                    
                    <h3>Bibliografia</h3>
                    <ul>
                        <xsl:for-each select="BIBLIO">
                            <li>
                                <xsl:value-of select="."/>
                            </li>
                        </xsl:for-each>
                    </ul>
                    <hr/>
                    <address>
                        <a style="color:#A52A2A" href="index.html#{generate-id()}">Voltar ao índice</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="TIPO"/>
    
    <xsl:template match="IDENTI"/>
    
    <xsl:template match="DESCRI"/>
    
    <xsl:template match="CRONO"/>
    
    <xsl:template match="LUGAR"/>
    
    <xsl:template match="FREGUE"/>

    <xsl:template match="CONCEL"/>
    
    <xsl:template match="CODADM"/>
    
    <xsl:template match="LATITU"/>
    
    <xsl:template match="LONGIT"/>
    
    <xsl:template match="ALTITU"/>
    
    <xsl:template match="INTERP"/>
    
    <xsl:template match="INTERE"/>
    
    <xsl:template match="BIBLIO"/>
    
    <xsl:template match="DATA"/>
    
    <xsl:template match="ACESSO">
        <h3>Acesso</h3>
        <p><xsl:apply-templates/></p>
        <hr/>        
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <h3>Quadro</h3>
        <p><xsl:apply-templates/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="TRAARQ">
        <h3>Trabalho Arqueológico</h3>
        <p><xsl:apply-templates/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="DESARQ">
        <h3>Descrição Arqueológica</h3>
        <p><xsl:apply-templates/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="DEPOSI">
        <h3>Depósito</h3>
        <p><xsl:apply-templates/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="AUTOR">
        <h3>Autor</h3>
        <p><xsl:apply-templates/></p>
        <hr/>
    </xsl:template>
    
    <xsl:template match="LIGA">
        <a href="https://www.google.com/search?q={.}"><xsl:apply-templates/></a>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>