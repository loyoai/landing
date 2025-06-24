
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'h1-regular-font-family': "'IBM Plex Sans', sans-serif",
'regular-text-xl-font-family': "'IBM Plex Sans', sans-serif",
'regular-text-md-font-family': "'IBM Plex Sans', sans-serif",
'regular-h1-font-family': "'IBM Plex Sans', sans-serif",
'regular-h3-font-family': "'IBM Plex Sans', sans-serif",
'h15-font-family': "'IBM Plex Sans', sans-serif",
'regular-text-lg-font-family': "'IBM Plex Sans', sans-serif",
'regular-h4-font-family': "'IBM Plex Sans', sans-serif",
'regular-h2-font-family': "'IBM Plex Sans', sans-serif",
          },
          fontSize: {
            'h1-regular-font-size': "48px",
'regular-text-xl-font-size': "20px",
'regular-text-md-font-size': "16px",
'regular-h1-font-size': "48px",
'regular-h3-font-size': "30px",
'h15-font-size': "42px",
'regular-text-lg-font-size': "18px",
'regular-h4-font-size': "24px",
'regular-h2-font-size': "36px",
'size-text-typo-size-text-md': "16px",
'size-text-typo-size-text-sm': "14px",
          },
          fontWeight: {
            'h1-regular-font-weight': "400",
'regular-text-xl-font-weight': "400",
'regular-text-md-font-weight': "400",
'regular-h1-font-weight': "400",
'regular-h3-font-weight': "400",
'h15-font-weight': "400",
'regular-text-lg-font-weight': "400",
'regular-h4-font-weight': "400",
'regular-h2-font-weight': "400",
          },
          lineHeight: {
            'h1-regular-line-height': "119.4%",
'regular-text-xl-line-height': "150%",
'regular-text-md-line-height': "150%",
'regular-h1-line-height': "125%",
'regular-h3-line-height': "126.6%",
'h15-line-height': "122.22%",
'regular-text-lg-line-height': "155.5%",
'regular-h4-line-height': "133.3%",
'regular-h2-line-height': "122.22%",
'line-height-text-line-heights-text-md': "24px",
'line-height-text-line-heights-text-sm': "20px", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
            'radius-radius-sm': '4px',  
          },
          colors: {
            
            'text-alternate': '#ffffff',
'text-white': '#fcfcfd',
'primary-sa-25': '#f7fdf9',
'neutral-300': '#d2d6db',
'button-button-background-neutral-default': '#f3f4f6',
'text-text-default': '#161616',
'text-primary': '#04994f',
'text-regular': '#0d121c',
'text-text-oncolor-primary': '#ffffff',
'global-text-default-disabled': '#9da4ae',
'button-primary': '#04994f',
'primary-sa-50': '#d2f8e5',
'icon-white': '#fcfcfd',
'neutral-500': '#6c737f',
'primary-sa-900': '#036c38',
'border-border-oncolor-transparent-30': 'rgba(255, 255, 255, 0.30)',
'link-link-oncolor': '#ffffff',
          },
          spacing: {
            'form-input-gap': '0px',
'form-input-padding': '0px',
'form-icon-enteredtext': '8px',
'form-input-container-padding-left': '8px',
'form-input-container-padding-right': '16px',
'button-buttons-lg-gap': '4px',
'button-buttons-lg-padding': '16px',
'global-spacing-none': '0px',
'spacing-space-xl': '16px',
'spacing-4xl': '32px',
'spacing-5xl': '40px',
'spacing-3xl': '24px',
'spacing-xl': '16px',
'spacing-md': '8px',
'link-link-sm-gap': '4px',
'button-buttons-md-gap': '4px',
'button-buttons-md-padding': '12px',  
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          