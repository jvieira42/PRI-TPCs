<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Arquivo sonoro: Página individual</title>
                <meta charsert="UTF-8"/>
                <link rel="stylesheet" href="/w3.css"/>
            </head>
            <body class="w3-padding-large w3-light-gray">
                <font size="4">
                <h1 class="w3-padding-small w3-xxxlarge"><xsl:value-of select="doc/tit"/></h1>
                <div class="w3-card w3-padding w3-light-gray">
                    
                    <table width="60%">
                        <tr>
                            <td><b>Província: </b><xsl:value-of select="doc/prov"/></td>
                            <td><b><xsl:value-of select="doc/file/@t"/>: </b><xsl:value-of select="doc/file"/></td>
                        </tr>
                        <tr>
                            <td><b>Localidade: </b><xsl:value-of select="doc/local"/></td>
                            <td><b>Duração: </b><xsl:value-of select="doc/duracao"/></td>
                        </tr>
                    </table>
                </div>
                <xsl:apply-templates/>
                </font>
            </body>
        </html>
    </xsl:template>
   

    <xsl:template match="tit"/>
    <xsl:template match="obs/file"/>
    <xsl:template match="prov"/>
    <xsl:template match="local"/>    
    <xsl:template match="file"/>
    
    <xsl:template match="duracao"/>
    
    <xsl:template match="from">
        <b> Natural: </b><xsl:apply-templates/>
        </xsl:template>

    <xsl:template match="prof">
        <b> Profissão: </b><xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="musico">
        <div class="w3-card w3-padding w3-light-gray">
            <h3><b>Músico:</b></h3>
            <p><xsl:apply-templates/></p>     
        </div>
    </xsl:template>
    
    <xsl:template match="obs">
        <div class="w3-card w3-padding w3-light-gray">
            <h3><b>Observações:</b></h3>
            <hr/>
            <p><xsl:apply-templates/></p>
            <ul>
                <xsl:for-each select="./file">
                    <li><xsl:value-of select="./@t"/>: <u><xsl:value-of select="."/></u></li>
                </xsl:for-each>
            </ul>
            
        </div>
    </xsl:template>
    
    <xsl:template match="inst">
        <div class="w3-card w3-padding w3-light-gray">
            <h3><b>Instrumento:</b></h3>
            <p><xsl:apply-templates/></p>    
        </div>
    </xsl:template>
    
    <xsl:template match="intxt">
        <br/><br/><b> Instrumento Extra: </b><xsl:apply-templates/>
    </xsl:template>
    
</xsl:stylesheet>