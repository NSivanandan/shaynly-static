<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap - Shaynly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
          body { background: #f8fafc; color: #1e293b; padding: 32px 16px; }
          .wrap { max-width: 1000px; margin: 0 auto; background: #fff; border-radius: 14px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .hdr { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #fff; padding: 32px; }
          .hdr h1 { font-size: 24px; font-weight: 800; margin-bottom: 6px; }
          .hdr p { color: #cbd5e1; font-size: 14px; }
          .stats { padding: 16px 32px; background: #f1f5f9; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; }
          .srch { padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 13px; width: 260px; outline: none; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; }
          th { background: #f8fafc; padding: 12px 24px; text-align: left; color: #64748b; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #e2e8f0; }
          td { padding: 12px 24px; border-bottom: 1px solid #f1f5f9; }
          td a { color: #d97706; text-decoration: none; font-weight: 600; word-break: break-all; }
          td a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="hdr">
            <h1>Shaynly XML Sitemap</h1>
            <p>Generated for Google Search Console, Bing Webmaster, and AI Retrieval Bots.</p>
          </div>
          <div class="stats">
            <div>Total Indexed URLs: <strong style="color:#d97706;"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></div>
            <input type="text" id="srch" class="srch" placeholder="Filter URLs..." onkeyup="f()"/>
          </div>
          <table id="tbl">
            <thead>
              <tr><th>URL</th><th>Priority</th><th>Change Frequency</th><th>Last Modified</th></tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><xsl:value-of select="sitemap:priority"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
        <script>
          function f() {
            var q = document.getElementById("srch").value.toLowerCase();
            var trs = document.getElementById("tbl").getElementsByTagName("tr");
            for (var i = 1; i &lt; trs.length; i++) {
              var td = trs[i].getElementsByTagName("td")[0];
              if (td) trs[i].style.display = (td.textContent || td.innerText).toLowerCase().indexOf(q) &gt; -1 ? "" : "none";
            }
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
